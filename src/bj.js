export class Card {
    constructor(suit, rank){
    this._suit = suit;
    this._rank= rank;
    this.face_down = false;
    }

    setFaceDown(){
        this.face_down = true;
    }

    get candyRank(){
        let pictureCards ={
            1: "A",
            11: 'J',
            12: 'Q',
            13: 'K'
        }

        if (this._rank>10 || this._rank === 1){
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
    constructor(){
        this.cards= this.make_fresh_deck();
    }

    make_fresh_deck(){
        let fresh_deck= [];

        for(let i=1; i<=13; i++){
            fresh_deck.push(new Card("hearts", i));
            fresh_deck.push(new Card("clubs", i));
            fresh_deck.push(new Card("spades", i));
            fresh_deck.push(new Card("diamonds", i));
        }
        return fresh_deck.sort( () => Math.random() -0.5);
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

    did_bust(draw_count) {
        if (draw_count > 21){
            console.log(`Count is ${draw_count}. Busted!`);
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
}

export class Dealer extends PlayerHand{
    constructor(cards){
        super(cards);
        this.drawn_cards = cards || [];
    }

    play(deck, idx = 0, limit= 17){
        while (this.num < limit) {
            this.add_card(deck.draw(idx));
            idx++;
        }
    }
}
