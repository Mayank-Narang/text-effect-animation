const container = document.querySelector(".container");

const careers = ['LeetCoder','Competitive Programmer','Web Developer','Freelancer','Instructor'];

let index = 0;
let ind = 0;
updater();

function updater() {
    container.innerHTML = `<h1> I am ${careers[index].slice(0,1) === 'I' ? 'an' : "a"} ${careers[index].slice(0, ind)}`;
    
    if (ind === careers[index].length) {
        setTimeout(() => {
            ind = 0;
            index++;
            if (index === careers.length) {
                index = 0;
            }
            updater();
        }, 1000);
    } else {
        ind++;
        setTimeout(updater, 100);
    }
}

