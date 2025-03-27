package defaul;

public class test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String refVar1 = new String ("abc");
		String refVar2 = "abc";
		String refVar3 = refVar1;
		System.out.println(refVar1 == refVar2);
		System.out.println(refVar1 != refVar2);
	}

}
