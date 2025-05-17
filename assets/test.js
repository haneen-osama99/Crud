const name = document.querySelector('#courseName');
const Category = document.querySelector('#courseCategory');
const Price = document.querySelector('#coursePrice');
const Description = document.querySelector('#courseDescription');
const Capacity = document.querySelector('#courseCapacity');
const addBtn = document.querySelector('#click');

let courses = [];
if (localStorage.getItem('courses') !=null){
    courses = JSON.parse(localStorage.getItem('courses'));
    displayCourses();
}
addBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const course={
        name : name.value,
        Category : Category.value,
        Price :Price.value,
        Description:Description.value,
        Capacity:Capacity.value
    } 
    courses.push(course)
    //بخزن بال local storge 
    localStorage.setItem("courses",JSON.stringify(courses));
    // console.log(courses);
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});
Toast.fire({
  icon: "success",
  title: "new course added successfully"
});
    displayCourses();
});

function displayCourses() {
    const result = courses.map((course,index)=>{

        return`
        <tr>
            <td>${index}</td>
            <td>${course.name}</td>
            <td>${course.Category}</td>
            <td>${course.Price}</td>
            <td>${course.Description}</td>
            <td>${course.Capacity}</td>
        </tr>
        `
    }).join(' ');
        document.querySelector('#data').innerHTML = result;
}
