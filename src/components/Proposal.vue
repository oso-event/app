<template>
  <div class="proposal" v-if="proposal">
    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image">
            <img :src="proposal.img" />
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{ proposal.title }}</strong>
              <small>{{ proposal.speaker }}</small>
            </p>
            <p>{{ proposal.description }}</p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    proposal: Object
  }
};
</script>

<style lang="scss">
.proposal {
  background-color: #fff;
  color: #373737;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  padding: 30px;
  + .proposal {
    margin-top: 20px;
  }
  .media {
    display: flex;
  }
  img {
    width: 64px;
    margin-right: 15px;
  }
  small {
    font-size: 14px;
    color: #657786;
  }
}
</style>
