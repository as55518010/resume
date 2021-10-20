<template>
  <div>
    <R-head></R-head>
    <main class="content">
      <!--基本信息-->
      <R-base-info></R-base-info>
      <R-content></R-content>
    </main>
    <R-foot></R-foot>
  </div>
</template>

<script>
import RHead from "@/components/head.vue";
import RBaseInfo from "@/components/baseInfo.vue";
import RContent from "@/components/content.vue";
import RFoot from "@/components/foot.vue";

export default {
  name: "Resume",
  components: {
    RHead,
    RBaseInfo,
    RContent,
    RFoot,
  },
};
</script>
