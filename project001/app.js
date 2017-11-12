new Vue({
        el: '#app',
        data: {
            isPlaying: false,
            player: {
                maxHealth: 100,
                health: 0,
                strength: 10,
                healPower: 10
            },
            enemy: {
                maxHealth: 100,
                health: 0,
                strength: 10,
                healPower: 10
            },
            events: []
        },
        methods: {
            startNewGame() {
                this.player.health = this.player.maxHealth;
                this.enemy.health = this.enemy.maxHealth;
                this.isPlaying = true;
                this.saveEvent("Start Game", "");
            },
            giveUp() {
                this.isPlaying = false;
                this.saveEvent("Gave up", "");
                this.enemyTurn();
            },
            attack() {
                let damage;
                if(this.succeeded(0.8))
                {
                    damage = this.calculateVariation(this.player.strength, this.player.strength/3);
                }
                else
                {
                    damage = 0
                }
                this.enemy.health -= damage;
                this.saveEvent("Attack", damage > 0 ? damage : "missed");
                this.enemyTurn();
            },
            specialAttack() {
                this.enemy.health -= 20;
                this.saveEvent("Special attack", 20);
                this.enemyTurn();
            },
            heal() {
                this.player.health += 10;
                if(this.player.health > this.player.maxHealth)
                    this.player.health = this.player.maxHealth;
                this.saveEvent("Healed", 10);
                this.enemyTurn();
            },
            enemyTurn(){
                this.player.health -= this.enemy.strength;
                this.saveEvent("Attack", this.enemy.strength);
            },
            succeeded(chance){
                let value = Math.random();
                if(value < chance)
                    return true;
                else
                    return false;
            },
            calculateVariation(value, range){
                let variation = Math.random()*range;
                console.log(variation);
                if(this.succeeded(0.5))
                    variation *= -1;
                console.log(variation);
                return Math.floor(value + variation);
            },
            saveEvent(type, detail){
                this.events.push(
                    {
                        name: type,
                        value: detail
                    }
                );
            }
        }
    });