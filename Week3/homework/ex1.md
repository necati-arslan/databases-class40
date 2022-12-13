# 1-What columns violate 1NF?

This table is not in 1NF because rule (1) of 1NF is violated because food_code, food_code columns contain multiple values .
the column dinner_date has diffirent data type. Althought some of them are datetime , some of them are string .

# 2-What entities do you recognize that could be extracted?

member,dinner,venue,food

# 3-Name all the tables and columns that would make a 3NF compliant solution.

member table:
member_id PK | member_name | member_address

dinner table:
dinner_id PK | dinner_date | venue_id FK | food_id FK

Venue table:
venue_id PK | venue_description

food_table:
food_id PK | food_description

relation_table:
id | dinner_id FK | member_id
