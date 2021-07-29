const app= Vue.createApp({

    data(){
        return {
            firstName:'Felix',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
            age:'20'
            
        }
    },
    methods: {
        async getUser() {
          const res = await fetch('https://randomuser.me/api')
          const { results } = await res.json()
    
          console.log(results)
    
          this.firstName = results[0].name.first
          this.lastName = results[0].name.last
          this.email = results[0].email
          this.gender = results[0].gender
          this.picture = results[0].picture.large;
          this.age = results[0].dob.age
        },
      },
});

app.mount('#app')