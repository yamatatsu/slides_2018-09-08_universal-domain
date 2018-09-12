import Activiy from './activity'

export default class User {
  constructor(plainUser) {
    this.id = plainUser.id
    this.activities = plainUser.activities.map(Activiy)
  }

  whiteDiary(diary) {
    const activity = Activiy.fromDiary(diary)
    const events = {
      addDiary: diary,
      addActivity: {
        $push: {
          activities: activity
        }
      },
    }
    return events
  }
}
