<template>
  <div>
    <ul class="list-group">
      <proposal
        v-for="proposal in proposals"
        v-bind:key="proposal.id"
        v-bind:proposal="proposal"
      >
      </proposal>
    </ul>
    <p>
      Total proposal count <span class="badge">{{ proposals.length }}</span>
    </p>
  </div>
</template>

<script>
import Proposal from "@/components/Proposal.vue";
export default {
  props: {
    proposals: Array
  },
  components: {
    Proposal
  }
};
</script>

<style>
p {
  padding-top: 15px;
}
</style>
