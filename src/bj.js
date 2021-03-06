export class Card {
    constructor(suit, rank){
    this._suit = suit;
    this._rank= rank;
    this.face_down = false;
    }

    flipCard(){
        this.face_down = !this.face_down;
    }

    get candyRank(){
        let pictureCards ={
            1: "A",
            11: 'J',
            12: 'Q',
            13: 'K'
        }

        if (this._rank>10 || this. _rank === 1){
            return pictureCards[this._rank];
        }
        else{
            return this._rank;
        }
    }

    get num_rank(){
        if (this._rank == 1) return 11;
        else if (this._rank>10) return 10;
        else return this._rank;
        }
}

export class Deck {
    constructor(n=1){
        this.cards= this.make_shoe(n);
    }

    make_fresh_deck(){
        let fresh_deck= [];
        const suits= ['hearts', 'clubs', 'spades', 'diamonds'];

        for(let i=1; i<=13; i++){

            for (let suit of suits){
                fresh_deck.push(new Card(suit, i));
            }
        }
        return fresh_deck.sort( () => Math.random() -0.5);
    }

    make_shoe(n){

        var shoe= [];

        for( let i =0; i<n; i++){
            shoe = shoe.concat(this.make_fresh_deck());
        }
        return shoe.sort( ()=> Math.random() -0.5 );

    }

    draw(i=0){

        let idx = (i>51)? i-52 : i;
        let returned_card = this.cards[idx];

        return returned_card ;
    }
}

 export class PlayerHand{
    constructor(cards){
        this.drawn_cards= cards || [] ;
    }

    blackjack(){
        if (this.num ===21 || this.draw_count ===2 ) return true;
        return false;
    }

    did_bust() {
        if (this.num > 21){
            console.log(`Count is ${this.draw_count}. Busted!`);
            return true;
        }
        else return false;
    };

    get draw_count(){
        return this.drawn_cards.length;
    }

    get num(){
        let total = 0;
        this.drawn_cards.forEach(card=> total += card.num_rank );
        return total;
    }

    add_card(card){

        this.drawn_cards.push(card);

        return card;
    }

    gameResult(dealHand){
        if (this.did_bust() ) return -1;
        if (dealHand.did_bust()) return 1;

        return Math.sign(this.num - dealHand.num)
    }

    clear(){
        this.drawn_cards = [];
    }

}

export class Dealer extends PlayerHand{
    constructor(cards){
        super(cards);
        this.drawn_cards = cards || [];
    }

    play(deck, idx = 0, limit= 17){

        this.drawn_cards[1].flipCard();

        while (this.num < limit) {
            this.add_card(deck.draw(idx));
            idx++;
        }
    }


}
