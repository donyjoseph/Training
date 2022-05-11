create database Assignmentstudent;



CREATE TABLE tblStudentDetail (
    id INT NOT NULL AUTO_INCREMENT,
    StdName VARCHAR(50) NOT NULL,
    district VARCHAR(50) NOT NULL,
    stdstatus VARCHAR(50),
    PRIMARY KEY (id)
);


CREATE TABLE tblSubjects (
    id INT NOT NULL AUTO_INCREMENT,
    subjects VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);


CREATE TABLE tblMark (
    id INT NOT NULL AUTO_INCREMENT,
    refStudent INT NOT NULL,
    refSubject INT NOT NULL,
    marks int ,
    PRIMARY KEY (id),
    FOREIGN KEY (refSubject)
        REFERENCES tblSubjects (id),
    FOREIGN KEY (refStudent)
        REFERENCES tblStudentDetail (id)
);


insert into tblStudentDetail(StdName,district) 
           values ('Anil','TVM'),
				   ('Ajay','KLM'),
				   ('Hari','TCR'),
				   ('Arun','CLT'),
				   ('Babu','EKM');


insert into tblSubjects(subjects) values('English'),('Maths'),('Science'),('History'),('Chemistry');



insert into tblMark(refStudent,refSubject,marks)values(1,1,20),(1,	2,	30),(1,	3,	10),(1,	4,	44),(1,	5,	32),(2,	1	,28),(2	,2	,26),
(2,	3,	35),
(2,	4	,44),
(2,	5	,29),
(3,	1	,28),
(3	,2,	29),
(3,	3,	44),
(3,	4,	36),
(3,	5,	28),
(4,	1,	29),
(4,	2,	44),
(4	,3,	46),
(4	,4,	41),
(4	,5	,28),
(5,	1	,18),
(5	,2	,25),
(5,	3	,26),
(5	,4	,19),
(5,	5,	29);

UPDATE tblstudentdetail 
SET 
   StdName = 'Ajay Kumar'
WHERE
tblstudentdetail.id =  1;
    
    
UPDATE tblstudentdetail 
SET 
    tblstudentdetail.district = 'WYND'
WHERE
    id = 3;
    
    
    
    UPDATE tblmark 
     SET marks = 20
     WHERE
      marks < 20;
    SELECT 
    marks,
   refStudent,
    refSubject,
    stdName,
    subjects
FROM
    tblmark tm
        JOIN
    tblstudentdetail ts ON tm.refStudent =ts.id
    join
    tblsubjects tsub on tm.refSubject=tsub.id
WHERE
    marks = (SELECT 
            MAX(marks)
        FROM
            tblmark
        WHERE
           tsub.subjects='Science');
            
            
            

   
create database Assignstudent;



CREATE TABLE tblStudentDetail (
    id INT NOT NULL AUTO_INCREMENT,
    StdName VARCHAR(50) NOT NULL,
    district VARCHAR(50) NOT NULL,
    stdstatus VARCHAR(50),
    PRIMARY KEY (id)
);


CREATE TABLE tblSubjects (
    id INT NOT NULL AUTO_INCREMENT,
    subjects VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);


CREATE TABLE tblMark (
    id INT NOT NULL AUTO_INCREMENT,
    refStudent INT NOT NULL,
    refSubject INT NOT NULL,
    marks int ,
    PRIMARY KEY (id),
    FOREIGN KEY (refSubject)
        REFERENCES tblSubjects (id),
    FOREIGN KEY (refStudent)
        REFERENCES tblStudentDetail (id)
);


insert into tblStudentDetail(StdName,district) 
           values ('Anil','TVM'),
				   ('Ajay','KLM'),
				   ('Hari','TCR'),
				   ('Arun','CLT'),
				   ('Babu','EKM');


insert into tblSubjects(subjects) values('English'),
												  ('Maths'),
												  ('Science'),
												  ('History'),
												  ('Chemistry');



insert into tblMark(refStudent,refSubject,marks)values(1,1,20),
(1,	2,	30),
(1,	3,	10),
(1,	4,	44),
(1,	5,	32),
(2,	1	,28),
(2	,2	,26),
(2,	3,	35),
(2,	4	,44),
(2,	5	,29),
(3,	1	,28),
(3	,2,	29),
(3,	3,	44),
(3,	4,	36),
(3,	5,	28),
(4,	1,	29),
(4,	2,	44),
(4	,3,	46),
(4	,4,	41),
(4	,5	,28),
(5,	1	,18),
(5	,2	,25),
(5,	3	,26),
(5	,4	,19),
(5,	5,	29);

UPDATE tblstudentdetail 
SET 
    tblstudentdetail.StdName = 'Ajay Kumar'
WHERE
    tblstudentdetail.StdName = 'Ajay';
    
    
UPDATE tblstudentdetail 
SET 
    tblstudentdetail.district = 'WYND'
WHERE
    id = 3;
    
    
    
    UPDATE tblmark 
SET 
    marks = 20
WHERE
    marks < 20;
    
    
    
    
  SELECT 
    marks,
   refStudent,
    refSubject,
    stdName,
    subjects
FROM
    tblmark tm
        JOIN
    tblstudentdetail ts ON tm.refStudent =ts.id
    join
    tblsubjects tsub on tm.refSubject=tsub.id

SELECT MAX(marks) AS science
FROM tblmark;