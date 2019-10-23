import java.io.*;
import java.util.*;

public class Main {
	public static BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
	public static void main(String[] args) {
		GameFactory Factory = new GameFactory(); //A variable for the factory to be used
		try {
			System.out.print("Card (c) or Die (d) game? ");
			String GameType=br.readLine();
			Game GameToRun = Factory.RunGame(GameType); //A variable for the interface to be used
			
			//To call different methods of the interface

			GameToRun.initialiseGame();
			GameToRun.mainGame();
			GameToRun.declareGameWinner();
		}
		catch (Exception e) {
			System.out.println("Something went wrong: " + e.getMessage());
		}

	}
}