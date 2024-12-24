1.	Create a linked list of elements. 
a.	Delete a given element from the above list. 
	b.	Display the contents of the list after deletion.

import java.util.*;
public class SwitchLiList {
    public static void main(String[] args) {
        LinkedList<String	 li = new LinkedList<>();
        Scanner sc = new Scanner(System.in);
        int n;
        String ele;
        System.out.println("Enter 1 for add\nEnter 2 for delete\nEnter 3 to print\nEnter 4 to exit");
        do{
            System.out.print("Choose between 1-4 : ");
            n=sc.nextInt();
            sc.nextLine();
            switch (n){
                case 1 :
                    System.out.print("Enter element to add : ");
                    ele = sc.nextLine();
                    li.add(ele);
                    break;
                case 2 :
                    System.out.print("Enter element to delete : ");
                    ele = sc.nextLine();
                    li.remove(ele);
                    break;
                case 3 :
                    System.out.println("List is "+li);
                    break;
                case 4 :
                    break;
                default :
                    System.out.println("Choose a valid number");
            }
        }
        while (n!=4);
    }
}
2.	Write a java program that connects to a database using JDBC and does add, delete, modify and retrieve operations.

import java.sql.*;
public class JDBCExe {
    public static void main(String[] args) throws SQLException{
        String url = "jdbc:mysql://localhost:3306:yourDatabase";
        String user = "user";
        String pass = "root";
        Connection con = DriverManager.getConnection(url,user,pass);
        Statement st = con.createStatement();
        //Create
        String createQuery = "CREATE TABLE fruits(id int,name varchar(30));";
        st.executeUpdate(createQuery);
        //Insert
        String insertQuery = "INSERT INTO fruits VALUES(1,'apple'),(2,'banana'),(3,'custard apple);";
        st.executeUpdate(insertQuery);
        //Update
        String updateQuery = "UPDATE fruits SET name = 'apricot' WHERE id = 1;";
        st.executeUpdate(updateQuery);
        //Delete
        String deleteQuery = "DELETE FROM fruits WHERE id = 3;";
        st.executeUpdate(deleteQuery);
        //Select
        String selectQuery = "SELECT * FROM fruits;";
        ResultSet r = st.executeQuery(selectQuery);
        while(r.next()){
            System.out.println("ID = "+r.getInt("id")+",Name = "+r.getString("name"));
        }
        con.close();
    }
}






3.	Write a java program to check whether a given string is palindrome.

import java.util.*;
public class StringPal {
    public static boolean isPalindrome(String a){
        Stack<Character> st = new Stack<>();
        for (char x : a.toCharArray()){
            st.push(x);
        }
        for (char x : a.toCharArray()){
            if(st.pop() != x){
                return false;
            }
        }
        return true;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter any string : ");
        String a = sc.nextLine();
        if(isPalindrome(a)){
            System.out.println(a + " is a palindrome");
        }
        else{
            System.out.println(a + " is not a palindrome");
        }
    }
}











4.	The Fibonacci sequence is defined by the following rule. The first two values in the sequence are 1 and 1. Every subsequent value is the sum of the two values preceding it. Write a java program that uses both recursive and non-recursive functions.

import java.util.*;
public class Fib {
    public static int fibRec(int n){
        if(n==1 || n==2){
            return 1;
        }
        else {
            return fibRec(n-1)+fibRec(n-2);
        }
    }
    public static void fibWRec(int n){
        int a = 1;int b = 1;int c;
        System.out.print(a + " " + b);
        for (int i = 3; i <= n; i++) {
            c = a + b;
            System.out.print(" " + c);
            a = b;
            b = c;
        }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of terms of the fibonacci series : ");
        int n = sc.nextInt();
        if(n<=0){
            System.out.print("Enter a positive number");
        }
        else {
            System.out.print("Fibonacci series without recursion : ");
            fibWRec(n);
            System.out.print("\nFibonacci series with recursion : ");
            for (int i=1;i<=n;i++){
                System.out.print(fibRec(i) + " ");
            }
        }
    }
}

5.	Write a program to give example for multilevel inheritance in Java.

class GrandFather{
    void display(){
        System.out.println("Grand father");
    }
}
class Father extends GrandFather{
    void show(){
        System.out.println("Father");
    }
}
class Child extends Father{
    void print(){
        System.out.println("Child");
    }
}

public class MulInh {
    public static void main(String[] args) {
        GrandFather grandFather = new GrandFather();
        Father father = new Father();
        Child child = new Child();
        grandFather.display();
        father.display();
        child.display();
        father.show();
        child.show();
        child.print();
    }
}








6.	Write a java program to sort given list of integers in ascending order.

import java.util.*;
public class SortAsc {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter size of the array : ");
        int size = sc.nextInt();
        int[] a = new int[size];
        System.out.print("Enter elements : ");
        for(int i=0;i<size;i++){
            a[i]=sc.nextInt();
        }
        for (int i=0;i<size;i++){
            for (int j=i+1;j<size;j++){
                if(a[i]>a[j]){
                    int temp = a[i];
                    a[i] = a[j];
                    a[j] = temp;
                }
            }
        }
        System.out.print("Elements after swap : ");
        for(int i=0;i<size;i++){
            System.out.print(a[i] + " ");
        }
    }
}









7.	Write a Java program to swap two different types of data using Generics.

class Swap{
    public static <T> void swap(T a, T b) {
        T temp = a;
        a = b;
        b = temp;
        System.out.println("After swap : " + a + " " + b);
    }
}

public class GenericSwap {
    public static void main(String[] args) {
        int a = 5;
        int b = 10;
        System.out.println("Before swap : "+a+" "+b);
        Swap.swap(a,b);
        String m = "google";
        String n = "amazon";
        System.out.println("Before swap : "+m+" "+n);
        Swap.swap(m,n);
    }
}












8.	Write a java program that reads a file name from the user, and then displays information about whether the file exists, whether the file is readable, whether the file is writable, the type of file and the length of the file in bytes.

import java.io.*;
import java.util.*;
public class FileInfo{
    public static void main(String[] args) throws IOException{
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter thr file name : ");
        String fileName = sc.nextLine();
        File file = new File(fileName);
        if(file.exists()){
            System.out.println("File exists");
            System.out.println("File readable : " +file.canRead());
            System.out.println("File writeable : " +file.canWrite());
            System.out.println("File type : "+(file.isDirectory()?"Directory":"File"));
            System.out.println("File length : "+file.length()+" bytes");
        }
        else {
            System.out.println("File does not exists");
        }
    }
}












9.	Write a java program that displays the number of characters, lines and words in a text file.

import java.io.*;
import java.util.*;
public class FileTF {
    public static void main(String[] args) throws IOException{
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter thr file name : ");
        String fileName = sc.nextLine();
        BufferedReader reader = new BufferedReader(new FileReader(fileName));
        int charCount = 0,lineCount=0,wordCount=0;
        String line;
        while((line = reader.readLine())!=null){
            lineCount+=1;
            charCount+=line.length();
            wordCount+=line.split("\\s").length;
        }
        System.out.println("Line count : "+lineCount);
        System.out.println("Character count : "+charCount);
        System.out.print("Word count : "+wordCount);
    }
}













10.	Write a java program that prints all real solutions to the quadratic equation ax2+bx+c=0. Read in a, b, c and use the quadratic formula.

import java.util.*;
public class QuadEq {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double a,b,c;
        System.out.print("Enter a value : ");
        a = sc.nextDouble();
        System.out.print("Enter b value : ");
        b = sc.nextDouble();
        System.out.print("Enter c value : ");
        c = sc.nextDouble();
        double d = b*b-(4*a*c);
        if(a==0 || b==0 || c==0){
            System.out.print("Value of a,b,c cannot be '0'");
        }
        else if(d<0){
            System.out.print("Real roots does not exist");
        }
        else if (d==0) {
            double sol = -b/(2*a);
            System.out.print("The solution is real and equal : "+sol);
        }
        else {
            double sol1 = -b+Math.sqrt(d)/2*a;
            double sol2 = -b-Math.sqrt(d)/2*a;
            System.out.print("The solutions are real and different : "+sol1+","+sol2);
        }
    }
}







11.	Write a program that reads two numbers Num1 and Num2. If Num1 and Num2 were not integers, the program would throw a Number Format Exception. If Num2 were zero, the program would throw an Arithmetic Exception Display the exception..

import java.util.*;

public class NumException {
    public static void main(String[] args) {
        try {
            Scanner sc = new Scanner(System.in);
            System.out.println("Enter value of two numbers : ");
            String numS1 = sc.nextLine();
            String numS2 = sc.nextLine();
            int num1 = Integer.parseInt(numS1);
            int num2 = Integer.parseInt(numS2);
            if (num2 == 0) {
                throw new ArithmeticException();
            }
            int res = num1 / num2;
            System.out.println("The result of division is: " + res);
        }
        catch (NumberFormatException n){
            System.out.println("Invalid input");
        }
        catch (ArithmeticException a){
            System.out.println("Number 2 cannot be zero");
        }
    }
}

