import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      /*
      I declare totalSales and memberList array
      with each employee info and some default info
      */
      totalSales: 36,
      memberList: [
        {
          id: '02',
          fullName: 'Harry Potter',
          position: 'CSR',
          memberStats: {
            callTime: '00:02:40',
            bookedPercentage: '45%',
            membershipsSold: 12,
          }
        },
        {
          id: '01',
          fullName: 'Hermione Granger',
          position: 'Sales',
          memberStats: {
            callTime: '00:02:40',
            bookedPercentage: '45%',
            membershipsSold: 12,
          }
        },
        {
          id: '03',
          fullName: 'Ron Weasley',
          position: 'CSR',
          memberStats: {
            callTime: '00:02:40',
            bookedPercentage: '45%',
            membershipsSold: 12,
          }
        },
      ],
    }
  },
  mutations: {
    increaseMemberSales(state, member) {
      // we get the current member from the memberList array
      let currentMember = state.memberList.find(x => x.id === member.id);
      
      // we add the new sales to the sum of all the sales
      this.state.totalSales += currentMember.memberStats.membershipsSold;
      
      // we duplicate the amount of memberShips sold
      currentMember.memberStats.membershipsSold*=2;
    },
    increaseAllMemberSales(state) {
      // this function gets the current state and increases all sales
      for(let i=0; i < state.memberList.length; i++) {
        // we add the new sales to the sum of all the sales
        this.state.totalSales += state.memberList[i].memberStats.membershipsSold;
        
        // we duplicate the amount of each memberShips sold
        state.memberList[i].memberStats.membershipsSold*=2;
      }
    }
  }
})

export default store;