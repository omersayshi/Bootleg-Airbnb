/* Change id TYPE */
CREATE TABLE Branch(
	branch_id INTEGER, 
	address VARCHAR(20) not null,
	phone_no INTEGER,
	PRIMARY KEY (branch_id),
	CHECK(phone_no BETWEEN 1 and 15)
)

/* Change id TYPE */
CREATE TABLE Employee(
	employee_id INTEGER,
	branch_id INTEGER,
	manager_id INTEGER,
	first_name VARCHAR(20) not null,
	last_name VARCHAR(20) not null,
	email VARCHAR(30) not null,	
	phone_no INTEGER,
	PRIMARY KEY (employee_id),
	FOREIGN KEY (branch_id) REFERENCES branch,
	FOREIGN KEY (employee_id) REFERENCES Employee,
	CHECK(phone_no BETWEEN 1 and 15)
)

CREATE TABLE Host(
	host_id VARCHAR(10) not null,
	branch_id INTEGER not null,
	first_name VARCHAR(20) not null,
	last_name VARCHAR(20) not null,
	email VARCHAR(30) not null,	
	phone_no INTEGER,
	PRIMARY KEY (host_id),
	FOREIGN KEY (branch_id) REFERENCES branch,
	CHECK(phone_no BETWEEN 1 and 15)
)

CREATE TABLE Guest(
	guest_id VARCHAR(10) not null,
	first_name VARCHAR(20) not null,
	last_name VARCHAR(20) not null,
	email VARCHAR(30) not null,
	address VARCHAR(20) not null,
	phone_no INTEGER,
	PRIMARY KEY (guest_id),
	CHECK(phone_no BETWEEN 1 and 15)
)

CREATE TABLE Property(
	property_id VARCHAR(10) not null,
	host_id VARCHAR(10) not null,
	address VARCHAR(20) not null,
	city VARCHAR(20) not null,
	property_type VARCHAR(20) not null,
	room_type VARCHAR(20) not null,
	max_occupany INTEGER not null,
	num_rooms INTEGER not null,
	num_bathrooms INTEGER not null,
	PRIMARY KEY (property_id),
	FOREIGN KEY (host_id) REFERENCES host,
	/* CHECK THIS WITH PROF PLS*/
	CHECK(property_type in ('condo', 'bungalow', 'full detached house', 'semi detached house', 'townhouse')),
	CHECK(room_type in ('private rooms', 'shared rooms'))
	
)

CREATE TABLE Payment(
	payment_id INTEGER not null,
	payment_method VARCHAR(10) not null,
	card_number INTEGER not null,
	PRIMARY KEY (payment_id),
	CHECK(payment_method in ('interac','visa', 'mastercard'))
)


CREATE TABLE RentalAgreement(
	booking_id INTEGER not null,
	property_id VARCHAR(20) not null,
	guest_id VARCHAR(10) not null,
	payment_id INTEGER not null,
	start_date DATE not null,
	end_date DATE not null,
	PRIMARY KEY (booking_id),
	FOREIGN KEY (property_id) REFERENCES property,
	FOREIGN KEY (guest_id) REFERENCES guest,
	CHECK(start_date < end_date)
)





