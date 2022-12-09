import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  jokeList: []
}

export const statisticsSlice = createSlice({
  name: 'jokeStatistics',
  initialState,
  reducers: {
    likeJoke: (state, action) => {
        const newJoke = action.payload;
         
        const jokeExists = state.jokeList.find((joke) => joke.id === newJoke.id)

        if(jokeExists){
            jokeExists.likes += 1;
        }else{
            state.jokeList.push({id: newJoke.id, value: newJoke.value, likes: 1, dislikes:0 })
        }
      }, 
      
      dislikeJoke: (state, action) => {
        const newJoke = action.payload;
       const  jokeExists = state.jokeList.find((joke) => joke.id === newJoke.id);

        if(jokeExists){
            jokeExists.dislikes +=1;
        }else{
            state.jokeList.push({id: newJoke.id, value: newJoke.value, likes: 0, dislikes:1 })
        }

      },

  },
})

// Action creators are generated for each case reducer function
export const { likeJoke, dislikeJoke } = statisticsSlice.actions

export default statisticsSlice.reducer