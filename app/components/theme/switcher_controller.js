import { Controller } from '@hotwired/stimulus';

export default class SwitcherController extends Controller {
  static values = {
    currentTheme: String,
    otherTheme: String,
  };

  connect() {
    console.log("SwitcherController connected");
  }

  toggle() {
    console.log("current", this.currentThemeValue);
    console.log("other", this.otherThemeValue);
    document.documentElement.classList.remove(this.currentThemeValue)
    document.documentElement.classList.add(this.otherThemeValue)
  }
}
