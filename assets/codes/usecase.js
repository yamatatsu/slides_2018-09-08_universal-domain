import { Diary, User } from 'domain'
import { getUser } from './selectors'

const postDiary = (plainDiary) => async (dispatch, getState) => {
  dispatch({ type: 'POST_DIARY_REQESTED' })

  try {
    const diary = new Diary(plainDiary)
    const user = new User(getUser(getState()))
    const events = user.writeDiary(diary)

    dispatch({ type: 'POST_DIARY_SUCCEEDED', payload: events })
 } catch (error) {
    dispatch({ type: 'POST_DIARY_FAILED', payload: { error } })
  }
}
export default postDiary
