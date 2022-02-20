<template>
  <div class="cardContainer">
    <div class="cardHeader">
      <div class="employeeId">{{ Member.id }}</div>
      <div class="employeeImage">
        <img
        :src="`users/`+Member.id+`.jpg`"
        :alt="`User `+Member.fullName"
        @click="$store.commit('increaseMemberSales', Member)"
        />
      </div>
      <div class="employeeData">
        <p class="employeeName">{{ Member.fullName }}</p>
        <p class="employeePosition">{{ Member.position }}</p>
      </div>
    </div>
    <ul class="membershipData">
      <li>
        <p>Inbound Call Time: </p>
        <p>{{ Member.memberStats.callTime }} </p>
      </li>
      <li>
        <p>Booked Percentage: </p>
        <p>{{ Member.memberStats.bookedPercentage }} </p>
      </li>
      <li>
        <p>Memberships Sold: </p>
        <p>{{ Member.memberStats.membershipsSold }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    Member: { type: Object, required: true },
  },
};
</script>

<style scoped lang="scss">
$idSize: 2rem;
$imgSize: 3.5rem;
.cardContainer {
  background-color: $gray;
  width: 100%;
  min-width: 10rem;
  height: 13rem;
  display: flex;
  flex-direction: column;
  border-radius: $standardRadius;
  .cardHeader {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 4rem;
    padding: 1rem 1rem;
    .employeeId {
      background: $standardGradient02;
      min-width: $idSize;
      min-height: $idSize;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100%;
      font-weight: 600;
      color: white;
      margin: 0 .5rem;
    }
    .employeeImage {
      min-width: $imgSize;
      min-height: $imgSize;
      width: $imgSize;
      height: $imgSize;
      border-radius: 100%;
      margin: 0 .5rem;
      border: .1rem solid rgba(0, 0, 0, 0);
      transition: $standardTransition;
      img {
        border-radius: 100%;
        object-fit: contain;
        width: 100%;
        height: 100%;
        object-fit:cover;
      }
      &:hover {
        border: .1rem solid $secondaryColor;
        transform: $standardTransform;
        box-shadow: $standardShadow;
        cursor: pointer;
      }
    }
    .employeeData {
      text-align: left;
      font-weight: 600;
      flex-grow: 1;
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
        max-width: 80%;
        color: white;
      }
      .employeePosition {
        color: rgba(255, 255, 255, .3);
      }
    }
  }
  .membershipData {
    padding: 0;
    margin: 0;
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
        background: $standardGradient03;
        color: white;
        border-radius: 0 0 $standardRadius $standardRadius;
      }
    }
  }
}
</style>