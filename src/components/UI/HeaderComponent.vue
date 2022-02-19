<template>
  <div class="headerContainer">
    <div class="brandContainer">
      <p>
        <span v-for="(item, index) in headerInfo" :key="index" :class="item.class">{{ item.content }}</span>
      </p>
    </div>
    <div class="actionsContainer">
      <ButtonComponent>
        <img src="refreshIcon.svg" alt="VUE Demonstration Logo" />
      </ButtonComponent>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerInfo : [
        {
          content: 'Company Name',
          class: 'companyName'
        },
        {
          content: ' - CSR MTD - ',
          class: ''
        },
        {
          content: `Oct 22'`,
          class: 'companyDate'
        }
      ],
      navLinks : [
        {
          path: '/',
          title: 'Home'
        },
        {
          path: '/about',
          title: 'About'
        },
      ]
    }
  }

}
</script>

<style lang="scss">
  $horMargin: 2rem;
  .headerContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $gray;
    padding: 1.5rem;
    .brandContainer {
      display: flex;
      margin-left: $horMargin;
      color: white;
      .companyName {
        color: rgba(69, 131, 222, 1);
      }
      .companyDate {
        color: RGBA(255, 255, 255, .75);
      }
    }
    .actionsContainer img {
      width: 1.5rem;
    }
  }
</style>