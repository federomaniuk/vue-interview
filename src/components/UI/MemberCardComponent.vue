<template>
  <div class="cardContainer">
    <div class="cardHeader">
      <div class="employeeId">02</div>
      <div class="employeeImage">ER</div>
      <div class="employeeData">
        <p class="employeeName">Emmanuello Reminder</p>
        <p class="employeePosition">CSR</p>
      </div>
    </div>
    <ul class="membershipData">
      <li v-for="(data, index) in membershipData" :key="index" :id="data.id">
        <p>{{ data.title }}: </p>
        <p>{{ data.stat }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      membershipData: [
        { title: 'Inbound Call Time', stat: '00:02:40' },
        { title: 'Booked Percentage', stat: '45%' },
        { title: 'Memberships Sold', stat: '12' }
      ],
    };
  },
};
</script>

<style scoped lang="scss">
$idSize: 2rem;
$imgSize: 3.5rem;
.cardContainer {
  background-color: $gray;
  width: 100%;
  height: 15rem;
  display: flex;
  flex-direction: column;
  border-radius: $standardRadius;
  .cardHeader {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 4rem;
    padding: 1rem 1rem;
    .employeeId, .employeeImage {
      background: $standardGradient;
      width: $idSize;
      height: $idSize;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100%;
      font-weight: 600;
      color: white;
    }
    .employeeImage {
      width: $imgSize;
      height: $imgSize;
      background: white;
      color: $primaryColor;
    }
    .employeeData {
      text-align: left;
      font-weight: 600;
      display: flex;
      flex-direction: column;
      justify-content: center;
      p {
        margin: 0.2rem;
      }
      .employeeName {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width: 95%;
        color: white;
      }
      .employeePosition {
        color: rgba(255, 255, 255, .3);
      }
    }
  }
  .membershipData {
    padding: 0;
    li {
      list-style: none;
      display: flex;
      justify-content: space-between;
      padding: 0 2rem;
      color: rgba(255, 255, 255, .5);
      font-weight: 600;
      font-size: .9rem;
      &:first-child {
        background-color: rgba(255, 255, 255, .03);
        border-top: 1px solid rgba(255, 255, 255, .05)
      }
      &:last-child {
        background: $standardGradient;
        color: white;
        border-radius: 0 0 $standardRadius $standardRadius;
      }
    }
  }
}
</style>