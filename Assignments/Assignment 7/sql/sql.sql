

        insert  into tblstudentdetail (StdName,district)values ('Deepa','TVM'),('Sree','EKM') ;




           SELECT 
             id, StdName, district
           FROM
             tblstudentdetail;




         UPDATE tblmark 
          SET 
        marks = 40
          WHERE
        id = 8;


       alter table 
          tblstudentdetail 
       add 
          dateofbirth varchar(50);
  
  SELECT 
    id, refStudent, refSubject, marks
FROM
    tblmark
ORDER BY marks Desc;




 SELECT MIN(marks) 
FROM tblmark;

 
  SELECT MAX(marks) 
FROM tblmark;


SELECT 
    marks, StdName
FROM
    tblstudentdetail s
        JOIN
    tblmark m
WHERE
    m.refStudent = s.id;




alter table tblmark  DROP  FOREIGN KEY tblmark_ibfk_2;

delete from tblstudentdetail where id=5;

