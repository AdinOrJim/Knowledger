const correctAnswers = ['C', 'B', 'B', 'C', 'B', 'C', 'A', 'B', 'C', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const correct = Array.from(document.querySelectorAll('.correct'));

form.addEventListener('submit', e => {
    e.preventDefault();


    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value];

    //check answers
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 10;
        }
    });


    //show result
    result.classList.remove('d-none');
    window.scrollTo(0, 0);


    //score animation

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if (output === score) {
            clearInterval(timer);
        } else {
            output++;
        }

    }, 30);


    correct.forEach((item, index) => {
        item.textContent = `The correct answer is ${correctAnswers[index]}`;
    });


});
