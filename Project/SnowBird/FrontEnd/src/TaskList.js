import "./style/styles.css";
function TaskList() {
  return (
    <div>
      <div className="outer">
        {/* USer name with icon */}
        <div className="firstrow">
          <div className="usericon"></div>
          <label>User</label>
        </div>

        <div className="secondrow">
          {/* Side navigation menu */}
          <div className="firstcolumn">
            <nav>
              <li>Board</li>
              <li>Projects</li>
              <li>Epics</li>
              <li>Tasks</li>
              <li>Sprints</li>
              <li>Users</li>
            </nav>
          </div>
          <div className="secsecondcoloum">
            <div class="container">
        <button type ="button" class="btn1" >Createnew</button>
        <h1>Task</h1>
          <table>
            <thead>
              <th> #id</th>
              <th> Task</th>
              <th> Status</th>
              <th> Epic Name</th>
              <th> ProjectName</th>
            </thead>
            <tbody>
              <tr>
                <td> 10</td>
                <td>  Login screen-APi for Uservalidation </td>
                <td>  TODO </td>
                <td>  User Management </td>
                <td>  Ecommerce </td>
              </tr>
            </tbody>
          </table>
          </div>
          </div>
      </div>
    </div>
    </div>
  );
}
export default TaskList;
