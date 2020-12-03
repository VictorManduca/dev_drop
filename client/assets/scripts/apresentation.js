export function apresentation() {
      try{
            this.$router.push({name: 'new_account'})
      } catch (error){
            return Promise.reject(`[scripts|apresentation] ${ error }`)
      }
}