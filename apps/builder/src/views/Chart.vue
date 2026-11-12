<script setup lang="ts">
 import { use,graphic } from 'echarts/core';
 import { LineChart } from 'echarts/charts';
 import { CanvasRenderer } from 'echarts/renderers';
 import { TitleComponent, TooltipComponent, GridComponent, LegendComponent } from 'echarts/components';
 import { ref, onMounted } from 'vue';
 import VChart from 'vue-echarts';

 use([CanvasRenderer, LineChart, TitleComponent, TooltipComponent, GridComponent, LegendComponent]);

 const option = ref({
  title: {
    text: '折线图示例'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
  }
 });


</script>
<template>
  <v-chart class="chart" :option="option" />
</template>
