class Application {
  constructor(name) {
    this.name = name;
    this.tableElement = $("#task-table");
    this.tableBodyElement = $("#task-table").find("tbody");
    this.tasksList = [];
  }

  init() {
    this.loadTasks();
    this.addEventListeners();
  }

  addEventListeners() {
    $("button").on("click", function () {
      render();
    });
  }

  loadTasks() {
    $.ajax({
      method: "GET",
      url: "/data/tasks.json",
      success: (tasks) => this.onTasksLoaded(tasks),
      error: function (jqXhr, textStatus) {
        console.log("textStatus: ", textStatus);
      },
    });
  }

  render(filterText = "") {
    this.destroyTable();
    this.tasksList
      .filter(
        (item) =>
          !filterText || (filterText && item.taskName.includes(filterText))
      )
      .forEach((taskToBeAdded) => {
        let row = taskToBeAdded.getRow();
        this.tableBodyElement.append(row);
      });
  }

  // render(filterText = "") {
  //   // this.destroyTable();
  //   this.tasksList.forEach((taskToBeAdded) => {
  //     let row = taskToBeAdded.getRow();
  //     this.tableBodyElement.append(row);
  //   });
  // }

  onTasksLoaded(tasks) {
    tasks.forEach(
      ({
        taskName,
        taskDescription,
        status,
        startDate,
        dueDate,
        assignedUser,
      }) => {
        const taskToBeAdded = new Task(
          taskName,
          taskDescription,
          status,
          startDate,
          dueDate,
          assignedUser
        );
        this.tasksList.push(taskToBeAdded);
      }
    );
    this.render();
  }

  destroyTable() {
    this.tableBodyElement.empty();
  }
}
