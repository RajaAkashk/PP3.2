<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    type="text/css" />
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
        <div id="resultWeekDay"> </div>
      </div>

      <div class="col-md-6">
        <h2>Event on Weekends:</h2>
        <div id="resultWeekEnds"> </div>
      </div>
    </div>
  </section>

  <script>
    const eventForm = document.querySelector('#eventForm')
    const resultWeekDay = document.querySelector('#resultWeekDay')
    const resultWeekEnds = document.querySelector('#resultWeekEnds')

    let WeekEndsTaskList = [];
    let WeekDayTaskList = [];
    const selectDay = document.querySelector('#selectDay');
    let selectedDay = selectDay.value;

    selectDay.addEventListener('change', function () {
      selectedDay = selectDay.value;
    })

      eventForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const taskInput = document.querySelector('#taskInput').value
        if (selectedDay === "Saturday" || selectedDay === "Sunday") {
          WeekEndsTaskList.push(`${selectedDay}: ${taskInput}`);
          let storage2='';
          for (let i = 0; i < WeekEndsTaskList.length; i++) {
            storage2 += `<div class="card p-2 px-3 my-2"><p class="card-text">${WeekEndsTaskList[i]}</p></div>`
            resultWeekEnds.innerHTML = storage2 ;
          }
        }
         
      else {
        WeekDayTaskList.push(`${selectedDay}: ${taskInput}`);
        let storage='';
        for (let i = 0; i < WeekDayTaskList.length; i++) {
          storage += `<div class="card p-2 px-3 my-2"><p class="card-text">${WeekDayTaskList[i]}</p></div>`
          resultWeekDay.innerHTML = storage ;
        }
      }
 
    })

  </script>
  <script src="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>
