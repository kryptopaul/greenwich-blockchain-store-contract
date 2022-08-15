const { expect } = require('chai')
const { ethers } = require('hardhat')

const percentage = 15;
const above100Percentage = 115;
const connection = new ethers.providers.JsonRpcProvider('http://localhost:8545');

describe('GBAStore Tests', () => {

    let gbaStore:any;

    describe('Deployment', () => {

        it('Reverts if deployed with a % greater than 100.', async () => {

            const GBAStore = await ethers.getContractFactory('GBAStore');
            await expect(GBAStore.deploy(115)).to.be.revertedWith('Percentage must be less than 100');

        })


        it('Deploys the contract with correct percentage', async () => {
            const GBAStore = await ethers.getContractFactory('GBAStore');
            gbaStore = await GBAStore.deploy(percentage);
            expect(gbaStore.address).to.exist;
        })


    })

    describe('After Deployment', () => {
        
        it('Reverts if MATIC sent directly to the contract', async () => {
            const [owner] = await ethers.getSigners();

            const tx = {
                to: gbaStore.address,
                value: ethers.utils.parseEther('0.69'),
              }
            
            await expect(owner.sendTransaction(tx)).to.be.revertedWith('Funds cannot be directly sent to the contract');

        })

        it('Total Donated starts with 0', async() => {
            
            const totalDonated = await gbaStore.totalDonated()
            expect(totalDonated).to.equal(0)
        })

        it('Items Sold starts with 0', async() => {
            const itemsSold = await gbaStore.itemsSold()
            expect(itemsSold).to.equal(0)
        })

        it('Ukraine Donation Address should equal 0x165CD37b4C644C2921454429E7F9358d18A45e14', async() => {
            expect(await gbaStore.uaAddress()).to.equal('0x165CD37b4C644C2921454429E7F9358d18A45e14')
        })

        it('GBA Treasury address should equal 0xE1C98A5c3174DD3de80eA9aa48c3d3aeC40cbeF8', async() => {
            expect(await gbaStore.gbaAddress()).to.equal('0xE1C98A5c3174DD3de80eA9aa48c3d3aeC40cbeF8')
        })

    })

    describe('Split Payment Tests', () => {
        const amount = ethers.utils.parseEther('3.2123344');
        let decodedData:Array<any>;



        it('Reject if msg.value = 0', async () => {
            await expect(gbaStore.purchase({value: ethers.utils.parseEther("0")})).to.be.reverted;
        })


        it('Contract interaction goes through.', async() => {
            const tx = await gbaStore.purchase({value: amount});
            const receipt = await tx.wait(); 
            decodedData = ethers.utils.defaultAbiCoder.decode(['uint', 'uint'], receipt.logs[0].data) 
        })

        it('Ukraine Address receives <percentage>% of the amount', async() => {     
            expect(decodedData[0].toString()).to.equal((amount * (percentage / 100)).toString())
        })


        it('GBA Address receives (100% - <percentage>%) of the amount', async() => {
            expect(decodedData[1].toString()).to.equal((amount * (100 - percentage) / 100).toString())
        })

        it('Items Sold has increased by 1', async() => {

            const oldItemsSold = await gbaStore.itemsSold()
            expect(oldItemsSold).to.equal(1)
        })

    })
    
})