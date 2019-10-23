public class GameFactory { //Factory
  public Game RunGame(String GameType) throws Exception {
    if (GameType.equals("c")){
    	return new CardGame(); //if its c, then take to CardGame class
    }
    else if (GameType.equals("d")){
    	return new DieGame(); //if its d, then take to DieGame class
    }
    else throw new Exception("Input not understood");
  }
}