<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    type="text/css" />
  <style>
    ul,
    li {
      list-style: none;
    }

    ul {
      padding: 0;
    }
  </style>
</head>

<body class="container py-4">

  <h1>Event Planner</h1>
  <section>
    <form id="eventForm">
      <div>
        <label class="form-label fw-medium fs-6">Enter Event:</label>
        <input id="taskInput" class="form-control" placeholder="Enter your event" />
      </div>

      <div class="mt-2">
        <label class="form-label fw-medium fs-6">Select Day:</label>
        <select class="form-select" id="selectDay">
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary my-3">Add Event</button>
    </form>
  </section>

  <section>
    <div class="row">
      <div class="col-md-6">
        <h2>Event on Weekdays:</h2>
        <div>
          <ul id="resultWeekDay"></ul>
        </div>
      </div>

      <div class="col-md-6">
        <h2>Event on Weekends:</h2>
        <div>
          <ul id="resultWeekEnds"></ul>
        </div>
      </div>
    </div>
  </section>

  <script>
    const eventForm = document.querySelector('#eventForm')
    const resultWeekDay = document.querySelector('#resultWeekDay')
    const resultWeekEnds = document.querySelector('#resultWeekEnds')


    const selectDay = document.querySelector('#selectDay');
    let selectedDay = selectDay.value;

    selectDay.addEventListener('change', function () {
      selectedDay = selectDay.value;
    })

    let WeekEndsTaskList = [];
    let WeekDayTaskList = [];
    eventForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const taskInput = document.querySelector('#taskInput').value
      if (selectedDay === "Saturday" || selectedDay === "Sunday") {
        WeekEndsTaskList.push(`${selectedDay}: ${taskInput}`);
        updateWeekEndsTask();
      }
      else {
        WeekDayTaskList.push(`${selectedDay}: ${taskInput}`);
        updateWeekDaysTask();
      }
    });


    function updateWeekEndsTask() {
      resultWeekEnds.innerHTML = "";
      let storage = "";
      for (let i = 0; i < WeekEndsTaskList.length; i++) {
        storage += `<div class="border align-center p-2 px-3 "><p class="card-text ">${WeekEndsTaskList[i]}</p></div>`;
      }
      const liElement = document.createElement('li')
      liElement.innerHTML = storage;
      resultWeekEnds.appendChild(liElement)
    }

    function updateWeekDaysTask() {
      resultWeekDay.innerHTML = "";
      let storage2 = "";
      for (let i = 0; i < WeekDayTaskList.length; i++) {
        storage2 += `<div class="border p-2 px-3 "><div class="d-flex justify-content-between"><p class="card-text m-0 pt-1">${WeekDayTaskList[i]}</p><button onClick="deleteEvent(${i})" class="btn btn-danger">Delete</button></div></div>`;
      }
      const liElement2 = document.createElement('li')
      liElement2.innerHTML = storage2;
      resultWeekDay.appendChild(liElement2)
    }

    function deleteEvent(id) {
      WeekDayTaskList.splice(id, 1)
      updateWeekDaysTask()
    }


  </script>
  <script src="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>
