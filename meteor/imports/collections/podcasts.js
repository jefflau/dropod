import { Mongo } from 'meteor/mongo'

const Podcasts = new Mongo.Collection('podcasts');

export function addPodcast(podcast){
  Podcasts.insert({
    ...podcast,
    dateAdded: new Date()
  })
}
