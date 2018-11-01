class Players {
    private static _PlayerList: Player[] = [];
    
    public static addPlayer(newplayer:Player) {
        Players._PlayerList.push(newplayer);
    }
}