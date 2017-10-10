package java_multithread;

/**
 * Hello world!
 *
 */
public class Test1_1_1 
{
   private static final long counter = 10000000001L;
   
   public static void currency() throws InterruptedException {
	   long start = System.currentTimeMillis();
	   Thread thread = new Thread(new Runnable() {
		
		public void run() {
			int a = 0;
			for(long i = 0; i<counter; i++) {
				a+=5;
			}
			
		}
	});
	  thread.start();
	  int b = 0;
	  for(long i = 0; i < counter; i++) {
		  b+= 5;
	  }
	
	  thread.join();
	  long time = System.currentTimeMillis() - start;
	  System.out.println("currency time is " +  time+ "ms, b= " + b);
   }
   
   public static void serial() {
	   long start = System.currentTimeMillis();
	   int a = 0;
	   for(long i = 0; i<counter; i++) {
			a+=5;
		}
	   int b = 0;
	   for(long i = 0; i<counter; i++) {
			b+=5;
		}
	   long time = System.currentTimeMillis() - start;
	   System.out.println("serial time is " +  time+ "ms, b= " + b);
   }
}
