import { observable, Observable } from 'rxjs';

const observable$ = new Observable<number>(subscriber => {
  let counter = 1;
  
  setInterval(() => {
    subscriber.next(counter++);
  }, 1000);
});

const subscription = observable$.subscribe({
  next: value => console.log(value),
  error: err => console.log(err.message),
  complete: () => console.log('Completed')
});

setTimeout(() => {
  subscription.unsubscribe();
  console.log('Unsubbed');
}, 7000);
