create schema producttbl;
CREATE TABLE ProductName (
    id INT NOT NULL AUTO_INCREMENT,
    txtProductName VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

insert into ProductName(txtProductName) 
values
		('Casual Shirt'),
		('Formal Shirt'),
        ('TShirt'),
        ('Pants'),
        ('Suit');
        

create table ProductStock(
 id int not null auto_increment,
 refProductid int,
 variation varchar(60),
 StockQty int not null,
  primary key(id),
 foreign key(refProductid) references ProductName(id)
); 

insert into ProductStock(refProductid,variation,StockQty) 
values (1,'Small',55),
       (1,'Medium',45),
       (1,'Large',60),
       (2,'Small',56),
       (2,'Medium',80),
       (2,'Large',55),
       (3,'Small',46),
       (3,'Medium',48),
       (3,'Large',47),
       (4,'Large',60);
       
        
      SELECT 
    SUM(StockQty)
FROM
    ProductStock;
       
      
       SELECT 
    StockQty
FROM
    productstock
WHERE
    refProductid = 2;
       
      SELECT 
    txtProductName, StockQty
FROM
    productname pn
        JOIN
    productstock ps ON pn.id = ps.refProductid
WHERE
    pn.txtProductName = 'TShirt'
        AND ps.variation = 'small';

        UPDATE productstock
        JOIN
    productname pn ON pn.id = ps.refProductid 
SET 
    StockQty = 60
WHERE
    ps.variation = 'Medium'
        AND pn.txtProductName = 'TShirt';