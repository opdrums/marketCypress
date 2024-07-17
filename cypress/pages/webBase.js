import settingTest from "./settingTest";
import clickBase from "./clickBase";
import fieldBase from "./fieldBase";
import containsBase from "./containsBase";
import visibleBase from "./visibleBase";

class webBasePage {
  constructor() {
    this.settingTest = new settingTest();
    this.clickBase = new clickBase();
    this.fieldBase = new fieldBase();
    this.containsBase = new containsBase();
    this.visibleBase = new visibleBase();
  }
}
export default webBasePage;