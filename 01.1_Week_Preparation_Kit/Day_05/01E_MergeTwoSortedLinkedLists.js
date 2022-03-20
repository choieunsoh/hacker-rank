function mergeLists(head1, head2) {
  if (!head1) return head2
  if (!head2) return head1

  if (head1.data < head2.data) {
    return {
      data: head1.data,
      next: mergeLists(head1.next, head2),
    }
  } else {
    return {
      data: head2.data,
      next: mergeLists(head1, head2.next),
    }
  }
}

function print(head) {
  const arr = []
  while (head != null) {
    arr.push(head.data)
    head = head.next
  }
  console.log(arr.join(' '))
}

var head1 = { data: 1, next: { data: 2, next: { data: 3 } } }
var head2 = { data: 2, next: { data: 3, next: { data: 4 } } }
print(mergeLists(head1, head2))

var head1 = { data: 4, next: { data: 5, next: { data: 6 } } }
var head2 = { data: 1, next: { data: 2, next: { data: 10 } } }
print(mergeLists(head1, head2))
