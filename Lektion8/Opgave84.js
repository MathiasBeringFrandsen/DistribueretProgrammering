function createSubject() {
  const observers = [];

  function registerObserver(observer) {
    observers.push(observer);
  }

  function notifyObservers() {
    observers.forEach(observer => observer());
  }
  return {registerObserver, notifyObservers };
}

const subject = createSubject();

const observer = () => console.log("Jeg er notified");
const observer2 = () => console.log("lol");

subject.registerObserver(observer);
subject.registerObserver(observer2);
subject.registerObserver(() => console.log("Weeeeee"));
subject.registerObserver(() => console.log("I get it now!"));

subject.notifyObservers();