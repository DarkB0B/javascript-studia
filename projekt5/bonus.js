function interval() {
    let timer = 1
    setInterval(
      () => {
        // mamy coupling - interval ma na sztywno zaszyte w sobie C i D (..i logger)
        observeTimer.notify(timer);
        timer++
      }
      , 2000)
  }
  
  class Logger {
    static log(data) {
      console.log("data")
    }
  }
  
  function C(data) {
    console.log('[reader C]', data)
    const storageData = { data }
 //   sessionStorage.setItem('C', JSON.stringify(storageData))
    // brudzimy funkcję loggerem - to nie jest jej funkcjonalność!
   // Logger.log(data)
  }
  
  function D(data) {
    console.log('[reader D]', data)
    const storageData = { data }
 //   sessionStorage.setItem('D', JSON.stringify(storageData))
    // j/w
   // Logger.log(data)
  }
class Observable {
    constructor() {
      this.observers = [];
    }
  
    subscribe(func) {
      this.observers.push(func);
    }
  
    unsubscribe(func) {
      this.observers = this.observers.filter(observer => observer !== func);
    }
  
    notify(data) {
      this.observers.forEach(observer => observer(data));
    }

    // observeobserver(func, observer){
    //     var result = this.observers.find(obj => {obj === func
    //       })
    //       console.log("here");
    //       observer.notify(result);
    // }
  }

    var observeTimer = new Observable();
   // var observeIdk = new Observable();
    observeTimer.subscribe(D);
    observeTimer.subscribe(C);
    observeTimer.observeobserver(D, observeIdk)
 //   observeIdk.subscribe(Logger.log)
    




 interval()