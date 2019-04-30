<template>
  <div class="container" id="home">
    <div class="page-header">
      <h1>OSApp</h1>
    </div>

    <proposal-list v-bind:proposals="proposals"></proposal-list>
  </div>
</template>

<script>
// @ is an alias to /src
import ProposalList from "@/components/ProposalList.vue";

export default {
  components: {
    ProposalList
  },
  data() {
    return {
      proposals: [
        {
          id: 1,
          title: "elComite",
          speaker: "@elComite_net",
          description: "Presenting elComite",
          img:
            "https://pbs.twimg.com/profile_images/1060488888668577793/lUJ6EDwu_400x400.jpg",
          votes: 0,
          visible: true
        },
        {
          id: 2,
          title: "BilboStack",
          speaker: "@bilbostack",
          description: "Presenting BilboStack",
          img:
            "https://pbs.twimg.com/profile_images/1083790490150096897/aVPrSqzc_400x400.jpg",
          votes: 0,
          visible: true
        },
        {
          id: 3,
          title: "Meleeton",
          speaker: "@the_melee",
          description: "Presenting The Melée's Meléeton2019",
          img:
            "https://pbs.twimg.com/profile_images/1113034611100172289/s-0isiTt_400x400.png",
          votes: 0,
          visible: true
        }
      ]
    };
  }
};
</script>
