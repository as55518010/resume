<template>
  <div class="head">
    <p class="last-modified">最後更新於2021年10月</p>
    <a class="download-pdf" href="/" @click.prevent="getDownPdf">下載 PDF</a>
  </div>
</template>

<script>
import { message } from "ant-design-vue";
import html2Canvas from "html2canvas";
import JsPDF from "jspdf";

export default {
  name: "Head",
  setup() {
    function getDownPdf() {
      message.loading({
        content: "生成PDF中，請稍等...",
        key: "updatable",
      });
      html2Canvas(document.querySelector("#app"), {
        allowTaint: true,
        taintTest: false,
        useCORS: true,
        dpi: window.devicePixelRatio * 4,
        scale: 4,
      }).then(function (canvas) {
        let contentWidth = canvas.width;
        let contentHeight = canvas.height;
        let pageHeight = (contentWidth / 592.28) * 841.89;
        let leftHeight = contentHeight;
        let position = 0;
        let imgWidth = 595.28;
        let imgHeight = (592.28 / contentWidth) * contentHeight;
        let pageData = new Image();
        pageData.setAttribute("crossOrigin", "Anonymous");
        pageData = canvas.toDataURL("image/jpeg", 1.0);
        let PDF = new JsPDF("", "pt", "a4");
        if (leftHeight < pageHeight) {
          PDF.addImage(pageData, "JPEG", 0, 0, imgWidth, imgHeight);
        } else {
          while (leftHeight > 0) {
            PDF.addImage(pageData, "JPEG", 0, position, imgWidth, imgHeight);
            leftHeight -= pageHeight;
            position -= 841.89;
            if (leftHeight > 0) {
              PDF.addPage();
            }
          }
        }
        PDF.save("賴德福-履歷.pdf");
        message.success({
          content: "完成生成PDF",
          key: "updatable",
          duration: 2,
        });
      });
    }
    return {
      getDownPdf,
    };
  },
};
</script>
