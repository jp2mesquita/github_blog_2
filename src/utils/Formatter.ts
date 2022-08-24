import moment from "moment";

export function relativeDateToNowFormatter(date: string){
  return moment(date).fromNow()
}