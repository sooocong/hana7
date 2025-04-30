create table Major(
    id smallint unsigned auto_increment primary key comment '학과번호',
    name varchar(31) not null comment '학과명'
);

select * from Major;

insert Major(name) values('철학과');
insert Major(name) values('컴공과');
insert Major(name) values('건축과');
