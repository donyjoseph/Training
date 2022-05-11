create schema PROJECTMANAGEMENT;
CREATE TABLE tblusers (
    id INT NOT NULL AUTO_INCREMENT,
    txtUsername VARCHAR(50) NOT NULL,
    txtpassword varchar(50) not null,
    refUserRole int not null,
    PRIMARY KEY (id),
    foreign key (refUserRole) references tblUserRole(id)
);
CREATE TABLE tblUserRole(
id INT NOT NULL AUTO_INCREMENT,
txtUserrole varchar(50)NOT NULL,
primary key(id));
CREATE TABLE tblprojects (
    id INT NOT NULL AUTO_INCREMENT,
    txtname VARCHAR(50) NOT NULL,
    txtType varchar(50),
    refProjectOwner INT NOT NULL,
    dtEstStartDate DATETIME,
    dtEstEndDate DATETIME,
    PRIMARY KEY (id),
    foreign key (refProjectOwner) references tblusers(id)
);
CREATE TABLE tblEpics (
    id INT NOT NULL AUTO_INCREMENT,
    refProjectsid int not null,
    refAssignee INT,
    txttitle VARCHAR(50) NOT NULL,
    txtdescription varchar(150) not null,
    txtstatus varchar(10) not null,
    dtEstStartDate DATETIME,
    dtEstEndDate DATETIME,
    dtActEstStartDate DATETIME,
    dtActEstEndDate DATETIME,
    PRIMARY KEY (id),
    foreign key (refProjectsid) references tblprojects(id),
	foreign key (refAssignee) references tblusers(id)
    );

CREATE TABLE tblsprints (
id INT NOT NULL AUTO_INCREMENT,
txtSprintName varchar(50) not null,
dtEstStartDate DATETIME,
dtEstEndDate DATETIME,
dtActEstStartDate DATETIME,
dtActEstEndDate DATETIME,
primary key(id)
);

CREATE TABLE tblTasks (
    id INT NOT NULL AUTO_INCREMENT,
    refEpicid int not null,
    refAssignee INT,
    txttitle VARCHAR(50) NOT NULL,
    txtdescription varchar(150) not null,
    txtstatus varchar(10) not null,
    refsprintid int,
    dtEstStartDate DATETIME,
    dtEstEndDate DATETIME,
    dtActEstStartDate DATETIME,
    dtActEstEndDate DATETIME,
    PRIMARY KEY (id),
    foreign key (refEpicid) references tblEpics(id),
    foreign key(refAssignee) references tblEpics(id),
    foreign key(refsprintid) references tblsprints(id)
);
CREATE TABLE tblLogs (
id INT NOT NULL AUTO_INCREMENT,
refTask int not null,
txtstatus varchar(10) NOT NULL,
refusers int not null,
primary key(id),
foreign key (refusers) references tblusers(id),
foreign key(refTask) references tbltasks(id)
);
 insert into tblUserRole(txtUserrole)
values ("Manager"),
       ("Ceo"),
       ("Assistant Manager"),
       ("Emp1"),
       ("EMP2"),
       ("EMP3");
    insert tblprojects (txtname,txtType,refProjectOwner,dtEstStartDate,dtEstEndDate)
    values('Accounts','Finance',1,'2022-01-20','2022,02,20'),('MEDIA','NEWS',2,'2022-06-20','2022-08-20'),('HR','TRAINING',2,'2021-09-20','2021-12-20'),('IT','BACKEND',3,'2019-04-20','2019-06-20');
    Insert tblusers(txtUsername,txtpassword,refUserRole)
    Values ('LINSHA','ABCD','1'),('SEEBA','BBHD','2'),('Deena','FFGD','3');
    insert into tblEpics (refProjectsid,refAssignee,txttitle,txtdescription,txtstatus,dtEstStartDate,dtEstEndDate,dtActEstStartDate,dtActEstEndDate)
    values (1,3,'customer as users','SIMPLE', 'To-do','2022-03-2','2022-04-4','2022-04-10','2022-05-10'),
    (2,3,'SIMPLE USER','customer as owner', 'To-do','2022-03-2','2022-04-4','2022-04-10','2022-05-10'),
    (3,3, 'Better use','customer as HR', 'To-do','2022-03-2','2022-04-4','2022-04-10','2022-05-10');
    insert into tblTasks (refEpicid,refAssignee ,txttitle ,txtdescription ,txtstatus,refsprintid ,dtEstStartDate ,dtEstEndDate,dtActEstStart DatedtActEstEndDate )
    Values(4,3,'Task1','To-do','WANT TO COMPLETE','2020-01-22','2022-02-23','2021-02-10','2021-03-15'),(5,3,'Task2','To-do','BE TO COMPLETE','2020-02-22','2022-03-23','2021-03-10','2021-04-15');
    
    


