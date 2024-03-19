class ListNode{   
    constructor(val = 0, next = null){
        this.val = val;
        this.next = next;
    }
}

var deleteDuplicates = function(head) {
    let current = head;

    while(current !== null && current.next !== null){
        if(current.val === current.next.val){
            current.next = current.next.next;
        } else{
            current=current.next;
        }
    }

    return head;
};

//Function to create a linked list from an array:
function createLinkedListFromArray(arr){
    if(arr.length === 0) return null;

    let head = new ListNode(arr[0]);
    let current = head;

    for(let i = 1; i < arr.length; i++){
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return head;
}


//Function to convert a linked list to an array:
function linkedListToArray(head){
    let result = [];
    let current = head;

    while(current !== null){
        result.push(current.val);
        current = current.next;
    }

    return result;
}

//Example usage:
let list1 = createLinkedListFromArray([1, 1, 2]);
let list2 = createLinkedListFromArray([1, 1, 2, 3, 3]);

console.log(linkedListToArray(deleteDuplicates(list1)));
console.log(linkedListToArray(deleteDuplicates(list2)));