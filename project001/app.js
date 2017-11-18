new Vue({
        el: '#app',
        data: {
            isPlaying: false,
            player: {
                name: "Player",
                maxHealth: 100,
                health: 0,
                strength: 10,
                specialPower: 20,
                healPower: 15,
                normalCritChance: 0.1,
                normalMissChance: 0.1,
                specialCritChance: 0.3,
                specialMissChance: 0.25
            },
            enemy: {
                name: "Enemy",
                maxHealth: 100,
                health: 0,
                strength: 11,
                specialPower: 15,
                healPower: 5,
                normalCritChance: 0.75,
                normalMissChance: 0.1,
                specialCritChance: 0.33,
                specialMissChance: 0.25
            },
            events: []
        },
        methods: {
            startNewGame() {
                this.player.health = this.player.maxHealth;
                this.enemy.health = this.enemy.maxHealth;
                this.isPlaying = true;
                this.saveEvent("", "start game", "");
            },
            gameOver() {
                this.isPlaying = false;
                this.saveEvent("", "game over", "");
            },
            victory() {
                this.isPlaying = false;
                this.saveEvent("", "victory", "");
            },
            doAttack(target, attacker, isSpecial){
                let damage = 0;
                let message = "";
                
                let hitPoints   = isSpecial ? attacker.specialPower : attacker.strength;
                let missChance  = isSpecial ? attacker.specialMissChance : attacker.normalMissChance;
                let critChance  = isSpecial ? attacker.specialCritChance : attacker.normalCritChance;

                if(this.succeeded(missChance))
                {
                    damage = 0;
                }
                else
                {
                    if(this.succeeded(critChance))
                        damage = hitPoints * 1.2;
                    else
                        damage = hitPoints;
                }

                this.saveEvent(attacker.name,
                                isSpecial ? "special" : "attack",
                                damage > 0 ? damage : "but missed");
                
                this.doDamage(target, damage);
            },
            doHeal(target) {
                target.health += target.healPower;
                if (target.health > target.maxHealth)
                    target.health = target.maxHealth;
                this.saveEvent(target.name, "heal", target.healPower);
            },
            doDamage(target, damage) {
                target.health -= damage;

                if(target.health < 0)
                {   
                    target.health = 0;
                    this.isPlaying = false;

                    if(target.name == "Player")
                        this.gameOver();
                    else
                        this.victory();
                }
            },
            attack() {
                this.doAttack(this.enemy, this.player, false);
                if(this.isPlaying)
                    this.enemyTurn();
            },
            specialAttack() {
                this.doAttack(this.enemy, this.player, true);
                if (this.isPlaying)
                    this.enemyTurn();
            },
            heal() {
                this.doHeal(this.player);
                this.enemyTurn();
            },
            enemyTurn(){
                let enemyChanteToSpecial = 0.3;
                let enemyChanteToHeal = 0.25;

                if (this.enemy.health < this.enemy.maxHealth &&
                    this.succeeded(enemyChanteToSpecial))
                {
                    this.doHeal(this.enemy)
                    return;
                }

                if (this.succeeded(enemyChanteToSpecial))
                    this.doAttack(this.player, this.enemy, true);
                else
                    this.doAttack(this.player, this.enemy, false);
            },
            succeeded(chance){
                let value = Math.random();
                if(value < chance)
                    return true;
                else
                    return false;
            },
            saveEvent(action_character, action_type, action_detail){
                this.events.push(
                    {
                        character: action_character,
                        type: action_type,
                        value: action_detail
                    }
                );
            }
        }
    });