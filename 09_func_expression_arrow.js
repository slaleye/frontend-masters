// Since students are going to be accessed by Ids a lot of time we define a student Id function

let getStudentById = (studentId) =>
  studentRecords.find(
      (record) => record.id == studentId
  );

/* function getStudentById(studentId){
    return studentRecords.find(function matchId(record){
        return (record.id == studentId);
    })
}
 */

let printRecords = (recordIds) =>
  recordIds
    .map(getStudentById)
    .sort(
        (record1, record2) => record1.name < record2.name ? -1 : record1.name > record2.name ? 1 : 0
    )
    .forEach(
        (record) => console.log(` ${record.name} (${record.id})  ${record.paid ? "Paid" : "Not Paid"}`)
    );

/* 
function printRecords(recordIds) {
    // TODO
   // - take a list of student Ids-
    //- retrieve each student record by its student Id (hint: array `find(..)`)-
    //- sort by student name, ascending (hint: array `sort(..)`)-
    // sort() function is a mutator instead of returning a new array
    //- print each record to the console, including `name`, `id`, and `"Paid"` or `"Not Paid"` based on their paid status (hint: array `forEach(..)`)-
    let studentRecords = recordIds.map(getStudentById);

    studentRecords.sort( function sortByNameAsc(record1, record2){
        if (record1.name < record2.name) {
            return -1;
        }
        else if (record1.name > record2.name) {
            return 1;
        }
        else {
            return 0;
        }
    });
 
    studentRecords.forEach(function printRecord(record) {
        console.log(` ${record.name} (${record.id})  ${record.paid ? "Paid" : "Not Paid"}`);
    });



}
 */

 let paidStudentsToEnroll = () => [ 
     ...currentEnrollment,
     ...(
         studentRecords
        .filter(
            record => record.paid && !currentEnrollment.includes(record.id)
        )
        .map(
            record => record.id)
        )
    ];
 


/* function paidStudentsToEnroll() {
  // TODO
  // - look through all the student records, checking to see which ones are paid but **not yet enrolled**
  // record with paid = true but not in array currentEnroll()
  //	- collect these student Ids
  // - return a new array including the previously enrolled student Ids as well as the to-be-enrolled student Ids (hint: spread `...`)
  let studentIdsToEnroll = studentRecords
    .filter(function needsToEnroll(record) {
      return record.paid && !currentEnrollment.includes(record.id);
    })
    .map(function getStudentId(record) {
      return record.id;
    });

  return [...currentEnrollment, ...studentIdsToEnroll];
} */

let remindUnpaid = recordIds => 
    printRecords(
        recordIds.filter(
            studentId => !getStudentById(studentId).paid
    ));

/* function remindUnpaid(recordIds) {
  // TODO
  //- take a list of student Ids
  //- filter this list of student Ids to only those whose records are in unpaid status
  // - pass the filtered list to `printRecords(..)` to print the unpaid reminders
  let unpaidIds = recordIds.filter(function hasNotPaid(studentId) {
    let record = getStudentById(studentId);
    return !record.paid;
  });

  printRecords(unpaidIds);
} */
// ********************************

var currentEnrollment = [410, 105, 664, 375];

var studentRecords = [
  { id: 313, name: "Frank", paid: true },
  { id: 410, name: "Suzy", paid: true },
  { id: 709, name: "Brian", paid: false },
  { id: 105, name: "Henry", paid: false },
  { id: 502, name: "Mary", paid: true },
  { id: 664, name: "Bob", paid: false },
  { id: 250, name: "Peter", paid: true },
  { id: 375, name: "Sarah", paid: true },
  { id: 867, name: "Greg", paid: false },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

/* Expected Output
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
