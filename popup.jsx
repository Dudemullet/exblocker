import config from "./local";
import $ from "jquery";

const getGroupURL = "https://api.projectoxford.ai/face/v0/persongroups/";
const groupId = 1;

let getGroup = ()=> {
  let params = {
    personGroupId: groupId
  };

  return $.ajax({
    url: getGroupURL,
    data: $.param(params),
    method: "GET",
    headers: {
      "Ocp-Apim-Subscription-Key": config.primary
      }
  });
}

let addPerson = ()=> {
  const url = `https://api.projectoxford.ai/face/v0/persongroups/${groupId}/persons`

}
getGroup()
  .success(()=>{
    console.log(arguments);
  })
