// Step 1: create db and insert one student
use college
db.students.insertOne({ rollNo: 101, name: 'Arun', dept: 'CSE', marks: 78, city: 'Chennai' })

// Step 2: insert four more students
db.students.insertMany([
  { rollNo: 102, name: 'Meena',   dept: 'ECE',  marks: 85, city: 'Madurai' },
  { rollNo: 103, name: 'Karthik', dept: 'CSE',  marks: 62, city: 'Chennai' },
  { rollNo: 104, name: 'Ravi',    dept: 'MECH', marks: 55, city: 'Coimbatore' },
  { rollNo: 105, name: 'Suresh',  dept: 'CSE',  marks: 91, city: 'Trichy' }
])

// Step 3: display all, then only CSE
db.students.find()
db.students.find({ dept: 'CSE' })

// Step 4: correct marks of roll 103 to 68
db.students.updateOne({ rollNo: 103 }, { $set: { marks: 68 } })

// Step 5: add semester: 3 to every CSE student
db.students.updateMany({ dept: 'CSE' }, { $set: { semester: 3 } })

// Step 6: delete roll 104
db.students.deleteOne({ rollNo: 104 })

// Step 7: count remaining
db.students.countDocuments()      // returns 4
