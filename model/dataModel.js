import { observable, action } from "mobx";
import { pushtoarray } from "../services/mapping";
import firebase from "react-native-firebase";
import { nameFromServer } from "../services/data-service";
 
//create in another folder 'Service > data-service'

export default class dataModel {
  @observable isLoading = false;

  @action
  fetchPackage() {
    this.isLoading = true;
    nameFromServer().onSnapshot(
      docs => {
        this.packages = pushtoarray(docs);
        this.isLoading = false;
      },
      e => {
        console.log("error", e);
        this.isLoading = false;
      }
    );
  }
}
