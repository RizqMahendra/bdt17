var operand = ["tambah","kurang","kali","bagi"]

if(process.argv[3] == operand[0])
{
console.log("Tambah:",Number(process.argv[2]) + Number(process.argv[4]));
}
else if(process.argv[3] == operand[1] )
{
console.log("kurang:",Number(process.argv[2]) - Number(process.argv[4]));
}
else if(process.argv[3] == operand[2] )
{
console.log("kali:",Number(process.argv[2]) * Number(process.argv[4]));
}
else if(process.argv[3] == operand[2] )
{
console.log("bagi:",Number(process.argv[2]) / Number(process.argv[4]));
}

else
{
console.log("tidak ada");
console.log("opsi :\n");
for(i=0;1<operand.length;i++)
    {
    console.log("%d. %s",(i+1),operand[i]);
    }
}
